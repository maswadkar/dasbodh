import json
import glob

result = []
for f in glob.glob("chapter*.json"):
    print(f)
    with open(f, "r",encoding='utf8') as infile:
        result.append(json.load(infile))
with open("all.json", "w",encoding='ascii') as outfile:
    json.dump(result, outfile)
