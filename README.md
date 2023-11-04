# My Devsite on React on Rails

[![Ruby on Rails CI](https://github.com/chrsmmns/devsite-react-rails/actions/workflows/rubyonrails.yml/badge.svg)](https://github.com/chrsmmns/devsite-react-rails/actions/workflows/rubyonrails.yml)

## Documentation
Following [this](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-v7-project-with-a-react-frontend-on-ubuntu-20-04) guide from DigitalOcean.

## Goal
I want to host my site with a Rails backend and a React frontend so I can utilize components and the glory that is Rails.

## Setup
To run local environment:
```bash
bundle install
rails db:{create,migrate,seed}
npm install
bin/dev
```
