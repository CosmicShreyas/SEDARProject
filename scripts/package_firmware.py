"""Package the current source and documentation for the website download."""
from pathlib import Path
import zipfile
with zipfile.ZipFile('public/SEDAR-Arduino.zip','w',zipfile.ZIP_DEFLATED) as archive:
    for p in Path('firmware').rglob('*'):
        if p.is_file(): archive.write(p,p.relative_to('firmware'))
for name in ['README.md','REALITY_CHECK.md','CONTROL_RESEARCH.md']:
    Path('public/SEDAR-'+name).write_bytes(Path('firmware',name).read_bytes())
print('Firmware download refreshed')
