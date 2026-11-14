"""Publish step: put the minified stylesheet inside every page as a <style> block.

A linked stylesheet holds back the first paint until it has downloaded; inlined, the page
can draw as soon as its own HTML arrives. The repo keeps the readable styles.css and the
<link> tags; only the published copy (_site) is changed. Usage: python3 inline-css.py _site
"""
import pathlib
import re
import sys

site = pathlib.Path(sys.argv[1])
css = (site / "styles.css").read_text(encoding="utf-8")
if "</style" in css.lower():
    sys.exit("styles.css contains '</style', refusing to inline")

link = re.compile(r'<link rel="stylesheet" href="(?:\.\./)*styles\.css(?:\?v=[\w.-]*)?"\s*/?>')
inlined, missed = 0, []
for page in sorted(site.rglob("*.html")):
    html = page.read_text(encoding="utf-8")
    new, n = link.subn(lambda m: "<style>" + css + "</style>", html, count=1)
    if n:
        page.write_text(new, encoding="utf-8")
        inlined += 1
    elif "styles.css" in html:
        missed.append(str(page.relative_to(site)))

print(f"inlined styles.css ({len(css)} bytes) into {inlined} pages")
if missed:
    print("::warning::styles.css still linked (not inlined) in: " + ", ".join(missed))
