#!/bin/sh
set -euf

rm -rf spec
mkdir -p spec

# Generate and copy serivces
for api in auth chat cloud group identity kv party portal matchmaker; do
	path=../backend/gen/svc/api-$api/smithy/openapi/.

	if [ -d "$path" ]; then
		echo
		echo "> Copying $api spec"
		cp -r $path spec || true
	fi
done
