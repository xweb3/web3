# Rust 入门

- [rust-lang](https://www.rust-lang.org/learn/get-started)
- [Rust 程序设计语言](https://kaisery.github.io/trpl-zh-cn/ch01-02-hello-world.html)

## 安装
```s
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Hello World

### 创建

```rs main.rs
fn main() {
    println!("Hello, world!");
}
```

### 打包并执行

```s
$ rustc main.rs
$ ./main
Hello, world!
```

## Cargo

[Hello, Cargo!](https://kaisery.github.io/trpl-zh-cn/ch01-03-hello-cargo.html)


