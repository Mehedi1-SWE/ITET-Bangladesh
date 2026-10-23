#!/usr/bin/env bash
set -euo pipefail

mkdir -p reference/live-site/css

curl --fail --location --retry 3 --silent --show-error "https://itetbd.net/" -o reference/live-site/home.html

python3 - <<'PY'
import re, urllib.parse, pathlib, subprocess
html = pathlib.Path("reference/live-site/home.html").read_text(errors="ignore")
urls = sorted(set(re.findall(r'href="([^"]+\.css[^"]*)"', html)))
base = "https://itetbd.net"
for i, u in enumerate(urls, 1):
    full = urllib.parse.urljoin(base, u)
    out = pathlib.Path("reference/live-site/css") / f"{i:02d}.css"
    subprocess.run(["curl","--fail","--location","--retry","3","--silent","--show-error",full,"-o",str(out)], check=True)
    print(out, full)

# keep a compact manifest of next static scripts too, useful for behavior reverse-engineering
scripts = sorted(set(re.findall(r'src="([^"]+\.js[^"]*)"', html)))
pathlib.Path("reference/live-site/script-urls.txt").write_text("\n".join(urllib.parse.urljoin(base,u) for u in scripts))
pathlib.Path("reference/live-site/css-urls.txt").write_text("\n".join(urllib.parse.urljoin(base,u) for u in urls))
PY
