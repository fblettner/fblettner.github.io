# fblettner.github.io
Knowledge Base, support, demo, documentation for NOMANA-IT

https://docs.nomana-it.fr/


## Setup Jekyll on macOS with github 
Setup Ruby / Jekyll / VSCode / Github

```bash
brew install ruby
gem install bundler
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="/Users/.../.local/share/gem/ruby/3.1.0/bin:$PATH"' >> ~/.zshrc

gem install --user-install bundler jekyll
bundle add webrick

jekyll new test
cd test
bundle exec jekyll serve
```


## NOT NEEDED FOR JEKYLL TO SERVE
For compilers to find ruby you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/ruby/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/ruby/include"

For pkg-config to find ruby you may need to set:
  export PKG_CONFIG_PATH="/opt/homebrew/opt/ruby/lib/pkgconfig"
