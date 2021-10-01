#!/usr/bin/env bash

generated_dir="${GENERATED_DIR:?}"

python3 generate_index_js_ts.py

find "$generated_dir" -name '*.js' -o -name '*.ts' -print0 \
	| xargs -0r sed --in-place -re 's#[ \t]+$##'
