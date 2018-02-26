
include image

#|
   This program demonstrates that Stopify can be used to implement
   interesting continuation patterns. Pyret's reactor library not only
   supports registering event handlers, but also is compositional –
   the interact() method returns a value that can be queried for the final
   state of the interaction.
   
   This example creates two reactors with different promps and composes their
   results in straight-line style. This is an emulation of blocking input
   atop Pyret's APIs with Stopify's implementation of continuation operations.
|#

fun prompt(t):
  r = reactor:
    init: nothing,
    to-draw: lam(_): text(t, 30, "black") end,
    on-key: lam(_, k) block:
        print(string-to-number(k))
      end,
    stop-when: lam(state): is-some(state) end,
    close-when-stop: true
  end
  r.interact().get-value().value
end


prompt("Press a numeric key for value 1") + prompt("Press a numeric key for value 2")
