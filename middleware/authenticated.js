export default function (app) {
  if (app.route.path == '/a' || app.route.path == '/a/') {
    app.redirect('/a/home')
  }
}