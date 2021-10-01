# Makefile

SHELL := /usr/bin/env bash
GENERATED_DIR := generated

.PHONY: default
default:
	@echo "Please select a target:"
	@echo "- preproto:    Copy *.proto from vega core repository."
	@echo "- proto:       Run buf to auto-generate API clients and gRPC documentation."

.PHONY: buf-build
buf-build:
	@buf build

.PHONY: buf-generate
buf-generate: buf-build
	@proto_gen_ts=./node_modules/.bin/protoc-gen-ts && \
	if ! test -r "$$proto_gen_ts" -a -x "$$proto_gen_ts" ; then \
		npm install && \
		if ! test -r "$$proto_gen_ts" -a -x "$$proto_gen_ts" ; then \
			echo "Not found/executable: protoc-gen-ts" ; \
			exit 1 ; \
		fi ; \
	fi
	@rm -rf $(GENERATED_DIR)
	@mkdir -p $(GENERATED_DIR)
	@buf generate

.PHONY: clean
clean:
	@rm -rf "$(GENERATED_DIR)"

.PHONY: preproto
preproto:
	@if test -z "$(VEGAPROTOS)" ; then echo "Please set VEGAPROTOS" ; exit 1 ; fi
	@rm -rf sources && cp -a "$(VEGAPROTOS)/sources" ./
	@rm -rf third_party && cp -a $(VEGAPROTOS)/third_party ./
	@(cd "$(VEGAPROTOS)" && git describe --tags) >sources/from.txt

.PHONY: proto
proto: buf-generate
	@env GENERATED_DIR="$(GENERATED_DIR)" ./post-generate.sh

.PHONY: test
test:
	@npm install && npm test
