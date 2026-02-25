.PHONY: help start stop init test test-show clean
.DEFAULT_GOAL := help

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

# Install dependencies only if package.json or pnpm-lock.yaml changed
node_modules: package.json pnpm-lock.yaml
	pnpm i
	@touch node_modules

install: node_modules ## Install dev dependencies

# Build only if source files changed or dependencies updated
dist: node_modules $(shell find src -type f -name "*.ts" -o -name "*.html" -o -name "*.scss" -o -name "*.css" -o -name "*.json" 2>/dev/null)
	pnpm build
	@touch dist

build: dist ## Build the app in dist folder

clean: ## Clean build artifacts and dependencies
	rm -rf dist node_modules

start: ## Start the docker containers
	docker compose up -d

stop: ## Stop the docker containers
	docker compose down

init: ## Initialize couchdb collections
	curl -X PUT http://user:password@127.0.0.1:5984/_users \
	curl -X PUT http://user:password@127.0.0.1:5984/_replicator \
	curl -X PUT http://user:password@127.0.0.1:5984/_global_changes

test: ## Run e2e tests (requires: make start)
	PW_TEST_CONNECT_WS_ENDPOINT=ws://127.0.0.1:3000/ npx playwright test

test-show: ## Open the HTML report with screenshots/traces
	npx playwright show-report
