# Cinema Date Invitation

A small static website for a private cinema date invitation. It uses only HTML, CSS, and vanilla JavaScript, so it can be hosted directly on GitHub Pages.

## Edit The Invitation

Open `index.html` and change the visible text in the booking card:

- Movie title: search for `Spider-Man: Brand New Day`
- Cinema name: search for `Vue Cinema Portsmouth`
- Cinema map link: update the two Google Maps `href` values
- Movie time: search for `11:10 - 13:59`

The main colours are CSS variables at the top of `style.css`.

## Poster

Place the movie poster at:

```text
assets/poster.jpg
```

Keep the same filename if you do not want to edit the HTML. A temporary placeholder poster is included so the site renders immediately.

## QR Or Ticket Images

Place optional QR codes or ticket images inside:

```text
assets/
```

For example:

```text
assets/ticket-qr.jpg
assets/tickets.png
```

Then add them to `index.html` with a normal image tag where you want them to appear.

## Optional `.pkpass` File

If you have an Apple Wallet pass, place it in `assets/`, for example:

```text
assets/cinema-ticket.pkpass
```

Then link it from `index.html`:

```html
<a href="assets/cinema-ticket.pkpass">Add to Apple Wallet</a>
```

GitHub Pages can serve the file, but the pass itself must be correctly created and signed by the ticket provider or a valid pass generator.

## Deploy With GitHub Pages

1. Push this folder to a GitHub repository.
2. Open the repository on GitHub.
3. Go to `Settings`.
4. Go to `Pages`.
5. Under `Build and deployment`, choose `Deploy from branch`.
6. Select branch `main`.
7. Select folder `/root`.
8. Save.

## Open The Website

After GitHub Pages finishes deploying, GitHub will show the live URL in the Pages settings. It usually looks like:

```text
https://your-username.github.io/your-repository-name/
```
