# Sardes Satranç — site + kulüp uygulaması (tek proje)

- `site/`  → tanıtım sayfaları (ana sayfa, haberler, kadromuz). Yayında `sardessatranc.com/` olur.
- `app/`   → üyelik + oyun uygulaması (React/Vite). Yayında `sardessatranc.com/uygulama/` olur.
- `supabase/schema.sql` → veritabanı şeması (daha önce çalıştırdıysan tekrar gerekmez).

## Yayın (GitHub + Vercel)
1. GitHub'da repoya bu klasörün **tüm içeriğini** (app/, site/, supabase/, scripts/, package.json,
   vite.config.js, vercel.json, .gitignore, .env.example) yükle. `.env` dosyası yükleme.
2. Vercel'de projeyi bu repodan oluştur. Framework: **Other**. Ayar değiştirme (vercel.json yeterli).
3. Environment Variables: `VITE_SUPABASE_URL` ve `VITE_SUPABASE_ANON_KEY` (Supabase → Project Settings → API).
4. Supabase → Authentication → URL Configuration:
   - Site URL: `https://sardessatranc.com/uygulama`
   - Redirect URLs: `https://sardessatranc.com/uygulama/sifre-guncelle` (ve varsa .vercel.app karşılığı)
