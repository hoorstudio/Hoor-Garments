// =========================================================
// HOOR GARMENTS — CONFIG FILE
// Yahan apni Supabase aur Cloudinary details paste karein
// =========================================================

// 1) SUPABASE — Project Settings > API se milega
const SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";        // e.g. https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_PUBLIC_KEY";

// 2) CLOUDINARY — Media store karne ke liye
const CLOUDINARY_CLOUD_NAME = "YOUR_CLOUDINARY_CLOUD_NAME";
const CLOUDINARY_UPLOAD_PRESET = "YOUR_CLOUDINARY_UPLOAD_PRESET"; // Unsigned upload preset (admin.html isay use karta hai)

// 3) ADMIN PANEL PASSWORD — admin.html me login ke liye
const ADMIN_PASSWORD = "changeme123"; // Isay zaroor badal dein

// ---------------------------------------------------------
// Neeche kuch nahi badalna
// ---------------------------------------------------------
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
