const arc = require("@architect/functions");
const static = arc.http.helpers.static;

module.exports = function layout({ contents }) {
  const nav = `
			<nav>
				<a href="/">
					<img class="logo" src="${static("/images/logo.svg")}"/>
				</a>
				<a href="https://arc.codes" target="_blank">Documentation</a>
			</nav>`;

  return `<!DOCTYPE html>
	<html>
	<head>
		<title>Architect demo app</title>
		<link rel=stylesheet href="${static("/css/style.css")}">
		<link rel="icon" type="image/png" sizes="16x16" href="${static("/images/architect-favicon-16.png")}">
		<link rel="icon" type="image/png" sizes="32x32" href="${static("/images/architect-favicon-32.png")}">
		<link rel="icon" type="image/png" sizes="64x64" href="${static("/images/architect-favicon-64.png")}">
	</head>
	<body>	
		${nav}
		<body>
			${contents}
		</body>
	</html>`;
};
