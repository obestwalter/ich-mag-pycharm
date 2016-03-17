"""
Minimal
http://python-packaging.readthedocs.org/en/latest/minimal.html

python setup.py develop

no uninstall! http://goo.gl/k0VZ3I
python setup.py --help-commands

-> pip wraps setup.py stuff + more (e.g. uninstall)
"""
from setuptools import setup

setup(
    name='ollislider',
    packages=['ollislider'],
    entry_points={
        'console_scripts': ["ollislider=ollislider.cli:main"]
    }
)
