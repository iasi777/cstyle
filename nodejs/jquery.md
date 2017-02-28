## jQuery

  - 给 jQuery 对象变量加 `$` 前缀.

    ```javascript
    // bad
    var sidebar = $('.sidebar');

    // good
    var $sidebar = $('.sidebar');
    ```

  - 缓存 jQuery 查询。

    ```javascript
    // bad
    function setSidebar() {
      $('.sidebar').hide();

      // ...stuff...

      $('.sidebar').css({
        'background-color': 'pink'
      });
    }

    // good
    function setSidebar() {
      var $sidebar = $('.sidebar');
      $sidebar.hide();

      // ...stuff...

      $sidebar.css({
        'background-color': 'pink'
      });
    }
    ```

  - 对 DOM 查询使用级联的 `$('.sidebar ul')` 或 `$('.sidebar > ul')` ，[jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16) 。
  - 对有缓存的 jQuery 对象查询使用 `find` 。

    ```javascript
    // bad
    $('ul', '.sidebar').hide();

    // bad
    $('.sidebar').find('ul').hide();

    // good
    $('.sidebar ul').hide();

    // good
    $('.sidebar > ul').hide();

    // good
    $sidebar.find('ul').hide();
    ```
