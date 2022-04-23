# select

A simple select box for html forms

# Example
```code
<link rel="stylesheet" href="../dist/css/select.css" />
    <div class="selectBox">
          <input id="nklist" type="text" class="selectInput" tabindex="1" />
          <div class="selectedList" id="listid">
            <ul tabindex="2">
              <li value="Algeria">Algeria</li>
              <li value="American Samoa">American Samoa</li>
              <li value="Andorra">Andorra</li>
              <li value="Angola">Angola</li>
            </ul>
          </div>
    </div>

<script src="../dist/js/select.js"></script>

<script>
      Nk.start({
        selectboxid: "#nklist",
        selectListid: "#listid",
        placeholder: "Select ..",
        maxHeight: "150px",
      });
</script>
```
# screenshot

![image](https://user-images.githubusercontent.com/11496339/159176527-1b2ec6b0-805f-4571-8211-0b76e75f1e32.png)
