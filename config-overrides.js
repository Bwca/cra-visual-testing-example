module.exports = {
    jest: (config) => 
      ({...config,
        "transform": {
            "^.+\\.(tsx|jsx|ts|js)$": "ts-jest",
            "^.+\\.s?css$": "jest-transform-css",
            "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file"
          }
    })
  }