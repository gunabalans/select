# select

A simple select box for html forms with select and search, this may be used as select2 alternative.


# Example

Add css 
```code
<link rel="stylesheet" href="../dist/css/select.css" />
```
Actual selet box html code

```code1
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
```    
Load script at the footer 
```code2
<script src="../dist/js/select.js"></script>
```
Call the script to start select box

```code3
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

![image](https://user-images.githubusercontent.com/11496339/164892681-42c95ce5-b5d5-4808-a29d-970bf4ee446d.png)

