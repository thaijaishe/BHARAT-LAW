# BHARAT LAW (ભારત લૉ)

ભારતના મુખ્ય કાયદાની તમામ કલમો: નવા અને જૂના કાયદાની કલમો સામસામે, ગુજરાતી સમજૂતી, 22 ભાષામાં અનુવાદ અને રાજ્ય પ્રમાણે કાયદા.

## ફાઇલો

| ફાઇલ | કામ |
|---|---|
| `index.html` | આખી એપ (ડેટા સાથે) |
| `sw.js` | ઑફલાઇન ચલાવવા અને ઓટો અપડેટ માટે |
| `version.json` | નવું વર્ઝન આવ્યું છે કે નહીં તે જણાવે છે |
| `manifest.webmanifest` | મોબાઇલમાં "Install" માટે નામ, લોગો, રંગ |
| `icons/` | લોગો |

## 1. GitHub Pages પર મૂકવું

1. github.com પર લૉગિન કરો. ઉપર જમણી બાજુ **+** પછી **New repository** દબાવો.
2. નામ આપો, જેમ કે `bharat-law`. **Public** પસંદ કરો અને **Create repository** દબાવો.
3. **uploading an existing file** લિંક દબાવો. આ ફોલ્ડરની બધી ફાઇલો અને `icons` ફોલ્ડર ખેંચીને મૂકો, પછી **Commit changes** દબાવો.
4. **Settings → Pages** માં જાઓ. **Branch: main** અને **/ (root)** પસંદ કરી **Save** દબાવો.
5. 1-2 મિનિટ પછી લિંક મળશે: `https://તમારું-યુઝરનેમ.github.io/bharat-law/`

## 2. મોબાઇલમાં એપ તરીકે ઇન્સ્ટોલ

- **Android (Chrome):** લિંક ખોલો. ઉપર "એપ ઇન્સ્ટોલ કરો" પટ્ટી આવશે, અથવા મેનુ ⋮ માં **Install app / Add to Home screen** દબાવો.
- **iPhone (Safari):** Share બટન પછી **Add to Home Screen** દબાવો.

## 3. ઓટો અપડેટ કેવી રીતે કરવું

જ્યારે પણ એપમાં ફેરફાર કરો ત્યારે ત્રણ જગ્યાએ વર્ઝન નંબર વધારો (જેમ કે `2.0.0` → `2.0.1`):

1. `index.html` માં `const APP_VERSION="2.0.0"` લખેલું છે, તે બદલો.
2. `sw.js` માં `const VERSION="2.0.0"` લખેલું છે, તે બદલો.
3. `version.json` માં `"version"` બદલો. `"notes"` માં શું નવું છે તે લખો.

પછી ત્રણેય ફાઇલ GitHub પર ફરી અપલોડ કરો. એપ વાપરનાર દરેકના ફોનમાં 30 મિનિટમાં (અથવા એપ ફરી ખોલે ત્યારે) લીલી પટ્ટી આવશે: **"નવું અપડેટ આવ્યું છે"**. **અપડેટ કરો** દબાવતાં નવું વર્ઝન ખુલશે.

## 4. Play Store માટે Android એપ (APK / AAB)

1. GitHub Pages ની લિંક ચાલુ થઈ જાય પછી **pwabuilder.com** ખોલો.
2. તમારી લિંક નાખી **Start** દબાવો. પછી **Package for stores → Android → Generate** દબાવો.
3. ZIP ડાઉનલોડ થશે. તેમાં ટેસ્ટ માટે `.apk` અને Play Store માટે `.aab` ફાઇલ હશે. ZIP માં `assetlinks.json` પણ હશે.
4. GitHub repository માં `.well-known` નામનું ફોલ્ડર બનાવી તેમાં `assetlinks.json` મૂકો. તેનાથી એપમાં ઉપરની બ્રાઉઝર પટ્ટી નહીં દેખાય.
5. Play Store પર મૂકવા માટે Google Play Console નું ડેવલપર એકાઉન્ટ જોઈએ. તેની એક વખતની ફી $25 છે.

આ APK પણ GitHub ની વેબસાઇટ જ ખોલે છે. એટલે GitHub પર અપડેટ મૂકો તો APK વાપરનારને પણ ઓટો અપડેટ મળશે. Play Store પર નવું વર્ઝન મૂકવાની જરૂર નથી.

## 5. અનુવાદ

- GitHub Pages પર ચાલતી એપમાં અનુવાદ Google Translate થી થાય છે. તેના માટે ઇન્ટરનેટ જોઈએ.
- ઇન્ટરનેટ ન હોય તો Chrome નું પોતાનું અનુવાદ ટૂલ વપરાય છે.
- આ મશીન અનુવાદ છે. કાનૂની ઉપયોગ માટે મૂળ અંગ્રેજી બેર એક્ટ જ માન્ય ગણાશે.

## 6. રોજ કેટલા લોકો જુએ છે અને કેટલાએ ઇન્સ્ટોલ કરી તે જોવું

એપમાં Google Analytics જોડેલું છે, ફક્ત ID નાખવાનું બાકી છે. તે મફત છે.

### ID કેવી રીતે મેળવવું (એક જ વાર, 10 મિનિટ)
1. **analytics.google.com** ખોલો અને તમારા Gmail થી લૉગિન કરો.
2. **Start measuring** દબાવો. Account name માં `BHARAT LAW` લખી **Next** દબાવો.
3. Property name માં `BHARAT LAW App`, Time zone **India**, Currency **INR** પસંદ કરો. **Next → Create** દબાવો અને શરતો સ્વીકારો.
4. પ્લેટફોર્મમાં **Web** પસંદ કરો. Website URL માં તમારી GitHub Pages લિંક નાખો (જેમ કે `yourname.github.io/bharat-law`), પછી **Create stream** દબાવો.
5. ત્યાં **Measurement ID** દેખાશે, જેમ કે `G-AB12CD34EF`. તેને કૉપી કરો.

### ID એપમાં નાખવું
1. GitHub પર `index.html` ખોલી પેન્સિલ (Edit) બટન દબાવો.
2. Ctrl+F દબાવી `const ANALYTICS` શોધો.
3. `ga4:""` ને બદલે `ga4:"G-AB12CD34EF"` લખો (તમારું ID).
4. **Commit changes** દબાવો.

### આંકડા ક્યાં જોવા
- **analytics.google.com → Reports:**
  - **Realtime:** અત્યારે કેટલા લોકો એપ વાપરે છે.
  - **Reports snapshot / Engagement → Overview:** રોજના વપરાશકર્તા (Active users), નવા વપરાશકર્તા અને કુલ વ્યૂ.
  - **Engagement → Events:**
    - `app_installed`: મોબાઇલમાં કેટલાએ એપ ઇન્સ્ટોલ કરી.
    - `open_installed_app`: ઇન્સ્ટોલ કરેલી એપ કેટલી વાર ખૂલી.
    - `install_button_click`: કેટલાએ ઇન્સ્ટોલ બટન દબાવ્યું.
    - `language_change`: કઈ ભાષા પસંદ થાય છે.
    - `page_view`: કયા પેજ અને કાયદા જોવાય છે.
  - **Demographics → Region/City:** કયા રાજ્ય અને શહેરમાંથી લોકો આવે છે.
- મોબાઇલ પર જોવા માટે **Google Analytics** એપ (Play Store) ઇન્સ્ટોલ કરો.
- નવા ઇવેન્ટ Reports માં દેખાતાં 24 કલાક લાગી શકે, પણ **Realtime** માં તરત દેખાય છે.

### બીજો સરળ વિકલ્પ: GoatCounter
- **goatcounter.com** પર મફત ખાતું બનાવો અને એક કોડ નામ પસંદ કરો (જેમ કે `bharatlaw`).
- `index.html` માં `goatcounter:""` ને બદલે `goatcounter:"bharatlaw"` લખો.
- આંકડા `https://bharatlaw.goatcounter.com` પર એક જ પેજમાં દેખાશે.

### Play Store ના ડાઉનલોડ
- PWABuilder થી બનાવેલી એપ Play Store પર મૂકો તો કુલ ડાઉનલોડ **Play Console → Statistics** માં દેખાશે.
- તે એપની અંદરનો ઉપયોગ પણ ઉપરના Google Analytics માં જ ગણાશે.

### ગોપનીયતા
- એપ કોઈનું નામ, ફોન નંબર કે શું શોધ્યું તે મોકલતી નથી. ફક્ત પેજ, ભાષા અને ઇન્સ્ટોલની ગણતરી મોકલે છે.
- જ્યાં સુધી ID ન નાખો ત્યાં સુધી કંઈ મોકલાતું નથી.

## નોંધ

- કેન્દ્રીય કાયદાનો પાઠ India Code ના સત્તાવાર બેર એક્ટ પરથી લીધો છે.
- રાજ્યના મોટા ભાગના કાયદાની ફક્ત યાદી છે. તેના પર ક્લિક કરતાં India Code પર શોધ ખુલે છે.
- દિલ્હી પોલીસ અધિનિયમ અને મદ્રાસ જિલ્લા પોલીસ અધિનિયમનો આખો પાઠ એપમાં છે.
- ગુજરાતના 4 કાયદાની મુખ્ય કલમોનો ગુજરાતી સારાંશ છે.
- FIR, ચાર્જશીટ કે કોર્ટમાં ઉપયોગ પહેલાં તાજા સુધારા સાથે સત્તાવાર બેર એક્ટ ચકાસો.
