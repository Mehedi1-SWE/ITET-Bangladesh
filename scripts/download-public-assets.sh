#!/usr/bin/env bash
set -euo pipefail

mkdir -p public/images/logo
mkdir -p public/images/home
mkdir -p public/images/leadership
mkdir -p public/images/partners

download() {
  local url="$1"
  local output="$2"
  echo "Downloading $output"
  curl --fail --location --retry 3 --retry-delay 2 --silent --show-error "$url" --output "$output"
}

download "https://itetbd.net/_next/static/media/itet-logo.18l-2n8two3ye.jpg" "public/images/logo/itet-logo.jpg"
download "https://itetbd.net/_next/static/media/footer-bg.1uqsdmgciiqzm.jpg" "public/images/home/hero-texture.jpg"
download "https://itetbd.net/hero-building-bg.jpg" "public/images/home/itet-architecture.jpg"

download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1784604127/t401koolwosautufl57y.jpg" "public/images/leadership/secretary-general.jpg"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1788451721/euf8qnccsryjcjw2vdix.jpg" "public/images/leadership/president.jpg"

download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1789365280/z4w2tnpphbqfifogzghm.webp" "public/images/partners/360d-soul.webp"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1789365281/ghsg9xis6ehmjqe3ygow.webp" "public/images/partners/emmtex-solutions.webp"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1789365282/yfnhpmf2tvekprgsxsx9.webp" "public/images/partners/knit-empir.webp"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1789365283/txtth9ndbcypx5nwrfo7.webp" "public/images/partners/texpro-worldno1.webp"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1789365283/shmhsayunyipq43jgjki.webp" "public/images/partners/auko-tex.webp"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1789365284/c8ha8ag7jkwqjjm2xb0t.webp" "public/images/partners/van-lin.webp"


mkdir -p public/images/market
mkdir -p public/images/gallery

download "https://i.postimg.cc/ryR1T3nB/L1.png" "public/images/market/yarn.png"
download "https://i.postimg.cc/5yzLmQQ4/L2.png" "public/images/market/chemical.png"
download "https://i.postimg.cc/mDtQt5bF/L3.png" "public/images/market/fabrics-accessories.png"

download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1787392520/fchpbtayxgoihujbolap.jpg" "public/images/gallery/gallery-01.jpg"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1786968419/dpwfafgh6ox4kau3zo9y.jpg" "public/images/gallery/gallery-02.jpg"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1786968268/kzyv31tazjvtpmnhp2ci.jpg" "public/images/gallery/gallery-03.jpg"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1786623204/omwhwr5woifwj17nl3se.jpg" "public/images/gallery/gallery-04.jpg"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1786622893/my8ajrl1bi360rubdto2.jpg" "public/images/gallery/gallery-05.jpg"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1786622571/rznb5zh4zfcwdym1vpc4.jpg" "public/images/gallery/gallery-06.jpg"
download "https://res.cloudinary.com/dov6k7xdk/image/upload/v1786622438/gzldzflekiej6bkxqid7.jpg" "public/images/gallery/gallery-07.jpg"

echo "Downloaded ITET public assets."
