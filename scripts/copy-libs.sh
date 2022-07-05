#!/bin/sh
set -euf

rm -rf spec
mkdir -p spec

# Copy serivces
for api in chat cloud group identity kv party matchmaker; do
	path=../backend/gen/svc/api-$api/smithy/openapi/.

	if [ -d "$path" ]; then
		echo
		echo "> Copying $api spec"
		cp -r $path spec || true
	fi
done
