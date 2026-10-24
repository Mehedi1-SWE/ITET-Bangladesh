export default function sitemap() {
  const base = "https://itetbd.net";
  const routes = ["","/history-itet","/mission-vision","/constitution","/committee","/welfareTrust","/membership-overview","/members-benifits","/membership-login","/membership-application","/events","/notices","/publication","/job-circular","/gallery","/market-prices","/leadership","/contact","/member-portal","/client-portal"];
  return routes.map((route) => ({ url: base + route, lastModified: new Date(), changeFrequency: route === "" ? "daily" : "weekly", priority: route === "" ? 1 : 0.7 }));
}
