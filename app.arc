@app
notes

@aws
profile personal
region eu-west-2

@shared
src src/shared

# @plugins
# architect/plugin-lambda-invoker

@http
get /
get /notes

post /notes
get /notes/:noteID
post /notes/:noteID
post /notes/:noteID/delete

post /likes

@events
notification

@scheduled
lower-likes rate(7 hours)

@tables
notes
  noteID *String
