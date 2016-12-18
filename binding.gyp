{
  "targets": [
    {
      "target_name": "runes",
      "sources": [ "runes.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
