# Projekt Setup mit Git

Kurzanleitung, um ein neues Projekt lokal zu initialisieren, mit Git zu verwalten und zu GitHub zu verbinden.

## Voraussetzungen
- Git installiert (https://git-scm.com/)
- GitHub Account (oder ein anderes Git-Remote)
- Optional: SSH-Key für GitHub oder Git Credential Manager für HTTPS (Windows)

## Globale Konfiguration (einmalig)
Öffne PowerShell oder die Eingabeaufforderung:
```bash
git config --global user.name "Dein Name"
git config --global user.email "du@beispiel.de"
git config --global core.autocrlf true   # Windows: verhindert Zeilenende-Probleme
```

## SSH-Key erzeugen (empfohlen)
PowerShell:
```bash
ssh-keygen -t ed25519 -C "du@beispiel.de"
# Public-Key kopieren:
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | clip
# Dann public key in GitHub -> Settings -> SSH and GPG keys einfügen
```

## Neues Repository lokal anlegen
Im Projekt-Ordner:
```bash
cd C:/Pfad/zu/projekt
git init
```

Empfohlene Dateien erstellen
- .gitignore (z. B. node_modules/, .env, /dist)
- README.md
- LICENSE

Beispiel .gitignore (kurz):
```text
node_modules/
.vscode/
.env
dist/
```

## Erste Commits
```bash
git add .
git commit -m "Initial commit"
# Optional: Hauptbranch auf "main" setzen
git branch -M main
```

## Remote-Repository hinzufügen und pushen

HTTPS:
```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

SSH:
```bash
git remote add origin git@github.com:USERNAME/REPOSITORY.git
git push -u origin main
```

Alternativ mit GitHub CLI:
```bash
gh repo create USERNAME/REPOSITORY --public --source=. --push
```

## Übliche Arbeitsabläufe
- Änderungen prüfen: git status
- Änderungen zur Staging-Area: git add <datei>
- Committen: git commit -m "Kurze Nachricht"
- Änderungen vom Remote holen: git pull
- Änderungen hochladen: git push

Branching & Zusammenführen:
```bash
git checkout -b feature/xyz
# arbeiten, add, commit
git checkout main
git merge feature/xyz
git push
```

Konflikte lösen: git status zeigt Dateien mit Konflikten; Datei manuell bearbeiten, dann:
```bash
git add <konflikt-datei>
git commit
```

## Nützliche Befehle (Kurzreferenz)
```bash
git log --oneline --graph --all
git diff
git restore --staged <datei>   # entfernt aus Staging
git rm --cached <datei>         # aus Repo entfernen, lokal behalten
git tag v1.0.0
```

## Empfehlungen
- Kleine, sprechende Commits
- Branching-Strategie (feature / develop / release)
- .gitignore früh anlegen
- Private Daten nie ins Repo einchecken (.env, Schlüssel)