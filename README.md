jQuery ImageListExpander
===

Current Version: 0.0.1

그냥 있으면 좋을 것 같아서 만듭니다.

- Reference: <http://tympanus.net/codrops/2013/03/19/thumbnail-grid-with-expanding-preview>

## Example

`bower install --dev` 이후 사용하시면 됩니다.

## How to use

```html
<ul class="imagelistexpander-list">
    <li class="imagelistexpander-list-item">
        <div class="imagelistexpander-trigger">click</div>
        <div class="imagelistexpander-arrow"></div>
        <div class="imagelistexpander-expander">
            <div class="imagelistexpander-expander-contents">
                <div class="imagelistexpander-trigger-close">x</div>
                <div class="col">
                    <div class="image"><img src="/sample/sample1.jpg" alt="" /></div>
                </div>
                <div class="col">
                    <div class="title">이상해씨</div>
                    <div class="contents">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>
```