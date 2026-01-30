const base64Input = "Y29uc29sZS5sb2coImhpIik7"; // console.log("hi");
let jsRobustRegex = `/(javascript\s*:\s*[^"'\s]+|\\x[0-9a-f]{2}|\\u[0-9a-f]{4}|fromCharCode|concat|substring|replace|\bon[a-z]+\s*=\s*['"][^'"]*['"]|(eval|setTimeout|setInterval|atob|Function|execCommand|write|innerHTML|outerHTML|insertAdjacentHTML)\s*\()/gi
`
let regex =`/(?:javascript\s*:\s*[^"'\s]+|\\x[0-9a-f]{2}|\\u[0-9a-f]{4}|fromCharCode|concat|substring|replace|\bon[a-z]+\s*=\s*['"][^'"]*['"]|(?:eval|setTimeout|setInterval|atob|Function|execCommand|write|innerHTML|outerHTML|insertAdjacentHTML)\s*\()/gi;
`
// Decode safely using Buffer
const decoded = Buffer.from(base64Input, 'base64').toString('utf8');

// Test with flags: 'g' (global), 'i' (case-insensitive)
if (jsRobustRegex.test(decoded)) {
    console.log("Match found! Content may contain JavaScript.");

    // Optional: Log all matches found to see what triggered it
    console.log("Detected markers:", decoded.match(jsRobustRegex));
}