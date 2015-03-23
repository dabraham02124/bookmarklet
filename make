#!/bin/bash

DIR=target

if [ ! -d "$DIR" ]; then
  mkdir "$DIR"
fi

IN=src/main/js/linkedImages.js
OUT=$DIR/linkedImages.js

rm -f $OUT

tr '\n' ' ' < $IN | sed -E 's/[[:space:]]+/%20/g'  > $OUT

