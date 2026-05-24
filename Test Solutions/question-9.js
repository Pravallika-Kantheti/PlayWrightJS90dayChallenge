function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    let suite = suiteName.trim();
    let env = environment.toLowerCase();
    let build = "build-" + buildNumber;
    return suite + ' | ' + env + ' | ' + build;
}

let result = buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42);
console.log(result);