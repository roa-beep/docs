#!/bin/sh
set -euf

# Generate and copy serivces
for path in $(find gen/ -type d -name 'api-*'); do
	echo
	echo
	echo "> Building $path docs"
	(cd $path && npm run postinstall && npm install && npm run build:docs)

	api=$(basename "$path")

	echo
	echo "> Copying $path docs"
	rm -rf static/typescript/$api
	cp -r $path/docs static/typescript/$api
done
