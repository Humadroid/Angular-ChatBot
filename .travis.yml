language : node_js
node_js :
 - stable

before_script:
  - npm install -g --silent firebase-tools
  - npm install -g --silent @angular/cli
  - npm install -g --silent bootstrap

script:
  - ng build --prod

after_success:
  - firebase use Angular-ChatBot
  - test $TRAVIS_BRANCH = "master" && test $TRAVIS_PULL_REQUEST = "false" && firebase deploy --token $FIREBASE_TOKEN --non-interactive

notifications:
  email:
    recipients:
      - souravbpd@gmail.com
    on_success: change # default: change
    on_failure: always # default: always
