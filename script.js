function showNotification() {
    if ('Notification' in window) {
        Notification.requestPermission()
            .then((permission) => {
                console.log(permission);

                if (permission === "granted") {
                    return navigator.serviceWorker.register("notification.js");
                }
            })
            .then((registration) => {
                if (registration) {
                    console.log("Service Worker registered with scope:", registration.scope);

                    registration.showNotification("This is a test notification", {
                        body: "Test note",
                        // icon: "path"
                    });

                    registration.active.postMessage('send Notification');
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}

showNotification();