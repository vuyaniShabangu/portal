/*
 *
 * Copyright (c) 2021 The Ontario Institute for Cancer Research. All rights reserved
 *
 *  This program and the accompanying materials are made available under the terms of
 *  the GNU Affero General Public License v3.0. You should have received a copy of the
 *  GNU Affero General Public License along with this program.
 *   If not, see <http://www.gnu.org/licenses/>.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 *  SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 *  TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 *  OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 *  IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 *  ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

import { css } from '@emotion/core';

import { getConfig } from '../../../global/config';
import { StyledLinkAsButton } from '../../Link';

const PageContent = () => {
  const {
    NEXT_PUBLIC_EGO_API_ROOT,
    NEXT_PUBLIC_EGO_CLIENT_ID,
  } = getConfig();

  return (
    <main
      css={(theme) => css`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
      `}
    >
      <article
        css={theme => css`
          background-color: ${theme.colors.white};
          border-radius: 5px;
          box-sizing: border-box;
          max-width: 770px;
          padding: 40px;
          width: 100%;
          ${theme.shadow.default};
        `}
      >
        <h1
          css={theme => css`
            color: ${theme.colors.primary};
            margin: 0 0 30px;
          `}
        >
          Data Submission
        </h1>
        <p
          css={theme => css`
            font-weight: bold;
            margin-bottom: 25px;
          `}
        >
          Viral genomes are submitted to this portal by approved users.
          </p>
        <ul
          css={theme => css`
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            margin: 0;
            padding: 0;
            width: 100%;

            li {
              box-sizing: border-box;
              display: flex;
              flex-basis: 50%;
              flex-direction: column;
              justify-content: space-between;
              padding: 10px 0;

              &:first-of-type {
                padding-right: 40px;
              }

              &:not(:first-of-type) {
                border-left: 1px solid ${theme.colors.grey_4};
                padding-left: 40px;
              }  
            }

            p {
              margin: 0 0 20px;
            }
          `}
        >
          <li>
            <p>To be granted a data submission account for your organization, please contact Genome Canada with an account request.</p>
            <StyledLinkAsButton
              css={(theme) => css`
                ${theme.typography.button};
                background-color: ${theme.colors.primary_dark};
                border-color: ${theme.colors.primary_dark};
                line-height: 20px;
                padding: 8px 20px;
                width: fit-content;
              `}
              href="https://www.genomecanada.ca/en/cancogen/contact-us"
              rel="noopener noreferrer"
              target="_blank"
            >
              Request an Account
            </StyledLinkAsButton>
          </li>
          <li>
            <p>If you already have an authorized account, please log in to submit your data.</p>
            <StyledLinkAsButton
              css={(theme) => css`
                ${theme.typography.button};
                background-color: ${theme.colors.primary_dark};
                border-color: ${theme.colors.primary_dark};
                line-height: 20px;
                padding: 8px 20px;
                width: fit-content;
              `}
              href={`${NEXT_PUBLIC_EGO_API_ROOT}/oauth/login/keycloak?client_id=${NEXT_PUBLIC_EGO_CLIENT_ID}`}
            >
              Log in to Submit Data
            </StyledLinkAsButton>
          </li>
        </ul>
      </article>

      {/*token ? 'yuss' : 'Big nope'*/}
    </main>
  );
};

export default PageContent;
