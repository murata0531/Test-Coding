# Test-Coding

nextjsでテストを書く

# 環境

Docker

TypeScript

Next

jest

ESLint

Prettier

Storybook

styled-components

# 使用

インストールしたいものがある場合(Dockerfileに書いても良い)

```
$ docker-compose run --rm nextjs yarn add <追加したいライブラリなど>
```

コンテナ立ち上げ

```
$ docker-compose up
```

立ち上がったら 
    
NextJS -> `http://localhost:3000` にアクセス
    
Storybook -> `http://localhost:6006` にアクセス