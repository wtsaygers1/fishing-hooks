Components
    - Splash Page
        -nav bar (About, Photos, Products, Reviews)
        -stateful
        -very similar to refactoring react blog
        -a function that contains the pages that are navegable
        -a const for the current page as a Hook
        -a const for setPage that will setItem in local storage
        - a useEffect that looks to see if the page in local storage is the same as the current page and sets the current page

        -return the navegable pages and a background image

    - Products Page
        -stateful
        -a function for the product information
            -axios call
        -useEffect to check if axiosGet has items or is empty array

        -option for adding item to cart and removing item from cart

        -return the products ordered in rows and columns to be viewed
        
    -Product Page
        -stateless
        -generic component
        -each product needs its own page
        -option for adding item to cart and removing item from cart

    -Cart Component
        -needs to be visible on all pages and array saved for when a user revisits
        -stateful
        -empty array at start
        -array can add and delete items
        -think of a conditional for if a product is selected that the cart will increase && if something is de-selected then the cart will decrease
