#!/usr/bin/env bash
set -euo pipefail

mkdir -p reference/live-site/css
mkdir -p reference/live-site/pages

declare -A ROUTES=(
  [home]="/"
  [history-itet]="/history-itet"
  [mission-vision]="/mission-vision"
  [constitution]="/constitution"
  [committee]="/committee"
  [welfare-trust]="/welfareTrust"
  [membership-overview]="/membership-overview"
  [member-benefits]="/members-benifits"
  [membership-login]="/membership-login"
  [events]="/events"
  [notices]="/notices"
  [publication]="/publication"
  [job-circular]="/job-circular"
  [gallery]="/gallery"
  [contact]="/contact"
  [member-portal]="/member-portal"
  [client-portal]="/client-portal"
)

for name in "${!ROUTES[@]}"; do
  path="${ROUTES[$name]}"
  echo "Capturing $path"
  curl --fail --location --retry 3 --retry-delay 2 --silent --show-error "https://itetbd.net${path}" -o "reference/live-site/pages/${name}.html"
done

cp reference/live-site/pages/home.html reference/live-site/home.html

python3 - <<'PY'
import re, urllib.parse, pathlib, subprocess

root = pathlib.Path("reference/live-site")
pages = root / "pages"
all_css = set()
all_scripts = set()
base = "https://itetbd.net"

for page in pages.glob("*.html"):
    html = page.read_text(errors="ignore")
    all_css.update(re.findall(r'href="([^"]+\.css[^"]*)"', html))
    all_scripts.update(re.findall(r'src="([^"]+\.js[^"]*)"', html))

for i, u in enumerate(sorted(all_css), 1):
    full = urllib.parse.urljoin(base, u)
    out = root / "css" / f"{i:02d}.css"
    subprocess.run(
        ["curl","--fail","--location","--retry","3","--retry-delay","2","--silent","--show-error",full,"-o",str(out)],
        check=True
    )
    print(out, full)

(root / "script-urls.txt").write_text("\n".join(urllib.parse.urljoin(base,u) for u in sorted(all_scripts)))
(root / "css-urls.txt").write_text("\n".join(urllib.parse.urljoin(base,u) for u in sorted(all_css)))

manifest = "\n".join(f"{p.stem}: {p.stat().st_size} bytes" for p in sorted(pages.glob("*.html")))
(root / "page-manifest.txt").write_text(manifest)
PY
