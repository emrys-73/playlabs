import sys
import os
import subprocess

def upload_to_github(repo_link, passphrase, commit_message="Initial commit"):
    # Navigate to the project directory
    project_dir = os.getcwd()

    # Initialize Git repository if not already initialized
    if not os.path.exists(os.path.join(project_dir, '.git')):
        subprocess.run(['git', 'init'], check=True)

    # Add remote repository
    subprocess.run(['git', 'remote', 'add', 'origin', repo_link], check=True)

    # Stage files
    subprocess.run(['git', 'add', '.'], check=True)

    # Commit changes
    subprocess.run(['git', 'commit', '-m', commit_message], check=True)

    # Push changes
    subprocess.run(['git', 'push', '-u', 'origin', 'master'], check=True)

if __name__ == "__main__":
    # Check if all required arguments are provided
    if len(sys.argv) < 3:
        print("Usage: python up.py <github_repo_link> <passphrase> [<commit_message>]")
        sys.exit(1)

    # Extract arguments
    github_repo_link = sys.argv[1]
    passphrase = sys.argv[2]
    commit_message = sys.argv[3] if len(sys.argv) >= 4 else "Initial commit"

    # Call the function to upload to GitHub
    try:
        upload_to_github(github_repo_link, passphrase, commit_message)
        print("Files uploaded to GitHub successfully.")
    except Exception as e:
        print("An error occurred:", e)
