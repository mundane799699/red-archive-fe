#!/bin/bash

# Color output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Starting deployment process...${NC}"
echo -e "${BLUE}========================================${NC}"

# Build the project
echo -e "\n${GREEN}Step 1: Building project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed! Aborting deployment.${NC}"
    exit 1
fi

echo -e "${GREEN}Build completed successfully!${NC}"

# Upload to server
echo -e "\n${GREEN}Step 2: Uploading to server...${NC}"
echo -e "${BLUE}Target: root@118.25.22.240:/home/xhs${NC}"

rsync -avz --progress --delete dist/ root@118.25.22.240:/home/xhs/

if [ $? -ne 0 ]; then
    echo -e "${RED}Upload failed!${NC}"
    exit 1
fi

echo -e "\n${GREEN}========================================${NC}"
echo -e "${GREEN}  Deployment completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
