#!/bin/sh
set -euf

rm -rf spec
mkdir -p spec
mkdir -p gen

# Copy serivces
for api in chat cloud group identity kv party matchmaker; do
	path=../backend/gen/svc/api-$api/smithy/openapi/.

	echo

	if [ -d "$path" ]; then
		echo "> Copying $api spec"
		cp -r $path spec || true
	fi

	path="gen/api-$api"
	
	rm -rf $path

	echo "> Copying $path"
	cp -r ../backend/gen/svc/api-$api/smithy/typescript/ $path
done

./scripts/build-libs.sh
