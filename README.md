[![made-with-react](https://img.shields.io/badge/Made%20with-React-yellowgreen.svg)](https://reactjs.org/)
[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

# Python tips

> Web application to describe tips for python programming language.
>
> It is built with **react** JS library and **django** web framework.

_**Note**: please take into account that it is built for demo purpose but not for actual usage._

## Tools
- front-end
  - [react](https://reactjs.org/) as javascript front-end library
  - ECMAScript 6+ standard
- back-end
  - python 3.6+
  - [django](https://www.djangoproject.com/) python web framework to build rest
  - [black](https://black.readthedocs.io/en/stable/) code formatter

## Usage

![Usage](usage.gif)

### Quick start

#### Build react app
```bash
npx create-react-app python-tips
npm install axios
npm install react-highlight-words
npm start
```

Then please open [localhost:3000](http://localhost:3000) endpoint.

#### Launch django rest server
```bash
python rest/manage.py migrate
python rest/manage.py createsuperuser
python rest/manage.py sync_tips
python rest/manage.py runserver
```
Then please open [localhost:8000/api/](http://localhost:8000/api/) endpoint.

### Meta

Author – Volodymyr Yahello

You can reach out me at:
* [vyahello@gmail.com](vyahello@gmail.com)
* [https://github.com/vyahello](https://github.com/vyahello)
* [https://www.linkedin.com/in/volodymyr-yahello-821746127](https://www.linkedin.com/in/volodymyr-yahello-821746127)

### Contributing
1. clone the repository
2. configure Git for the first time after cloning with your `name` and `email`
3. install `npm` package manager on your machine
4. install `python 3.6+` on your machine
5. `pip install -r rest/requirements.txt` to install all project dependencies
6. `pip install -r rest/requirements-dev.txt` to install all development project dependencies
