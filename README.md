Added a test example using [nestjs-typeorm-testing](https://github.com/devniel/nestjs-typeorm-testing). By now, it's necessary to install.

- @nestjs/typeorm
- @nestjs/common
- @nestjs/core
- rxjs

Todo:

- Replace nestjs-typeorm-testing with a module only about typeorm to avoid installing the modules mentioned above.

# Example how to use TypeORM with TypeScript

1. clone repository 
2. run `npm i`
3. edit `ormconfig.json` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers)
4. run `npm start`
5. enjoy!

## How to use CLI?

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands