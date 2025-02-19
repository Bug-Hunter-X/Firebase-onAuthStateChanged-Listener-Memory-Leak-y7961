# Firebase onAuthStateChanged Memory Leak
This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe.  This can lead to memory leaks and unexpected behavior in your application.

## The Problem
The `onAuthStateChanged` listener continues to run even after the component that initiated it is unmounted.  Without explicitly unsubscribing, this listener persists, consuming resources and potentially interfering with other parts of your application.

## The Solution
Properly unsubscribe from the `onAuthStateChanged` listener using the returned unsubscribe function. This ensures that the listener is removed when it's no longer needed, preventing memory leaks and other issues.