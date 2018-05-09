.PHONY: test

test:
	@echo Start testing
	@docker-compose -f ./docker-compose.itest.yml build
	@docker-compose -f ./docker-compose.itest.yml up -d api
	@docker-compose -f ./docker-compose.itest.yml up --exit-code-from itest itest
	@docker-compose -f ./docker-compose.itest.yml down