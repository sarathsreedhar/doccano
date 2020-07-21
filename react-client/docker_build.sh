#!/usr/bin/env bash
set -o errexit

root="$(dirname "$0")/.."
app="${root}/react-client"

(
  cd "${app}"
 
  if [[ ! -d node_modules/.bin ]]; then
    echo "Installing dependencies"
    npm install
  fi

  echo "Starting frontend server"
  npm install
  npm start 
)
