![python](http://i.imgur.com/bc2xk.png)

    !python
    def log(self, message, level='notice'):
        if self.logger and not callable(self.logger):
            raise ValueError(u"Invalid logger set, must be a callable")

        if self.verbose and self.logger:
            self.logger(message, level)

---

# Nicht die Schlange!1!!

![monty](monty-python.jpg)

---
