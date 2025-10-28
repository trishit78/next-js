// this is the intercepting route

// this route intercepts ->

/*
 -> localhost:3000/photo-feed   --> localhost:3000/photo-feed/[id]
    so here i have created a intercepting route, under photo-feed, but here photo feed url also has parallel route, so @modal, under @modal/(.id)[id]



    at first then the photo-feed page opens, photo-feed/page.tsx & @modal/default.tsx page opens in the layout, because the default page returns null so photo feed page comes up only


*/