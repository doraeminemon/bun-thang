INPUT_FILE=$1
START_LINE=`head -n1 $INPUT_FILE`
PATTERN="(feat|fix)\([a-z0-9\-]+\):.+"
if ! [[ "$START_LINE" =~ $PATTERN ]]; then
  echo "Bad commit message, see example: feat(foo): some text"
  exit 1
fi
