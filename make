#!/bin/bash

DIR=target

if [ ! -d "$DIR" ]; then
  mkdir "$DIR"
fi

IN=linkedImages.js
OUT=target/linkedImages.js

tr '\n' ' ' < $IN | sed -E 's/[[:space:]]+/%20/g'  > $OUT

