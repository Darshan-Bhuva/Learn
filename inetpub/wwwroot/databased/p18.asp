<html>

<body>
    <% Set MyBrow=Server.CreateObject("MSWC.BrowserType") %>
        <table border="1" width="100%">
            <tr>
                <th>Client OS</th>
                <th>
                    <%=MyBrow.platform%>
                </th>
            </tr>
            <tr>
                <td>Web Browser</td>
                <td>
                    <%=MyBrow.browser%>
                </td>
            </tr>
            <tr>
                <td>Browser version</td>
                <td>
                    <%=MyBrow.version%>
                </td>
            </tr>
            <tr>
                <td>Frame support?</td>
                <td>
                    <%=MyBrow.frames%>
                </td>
            </tr>
            <tr>
                <td>Table support?</td>
                <td>
                    <%=MyBrow.tables%>
                </td>
            </tr>
            <tr>
                <td>Sound support?</td>
                <td>
                    <%=MyBrow.backgroundsounds%>
                </td>
            </tr>
            <tr>
                <td>Cookies support?</td>
                <td>
                    <%=MyBrow.cookies%>
                </td>
            </tr>
            <tr>
                <td>VBScript support?</td>
                <td>
                    <%=MyBrow.vbscript%>
                </td>
            </tr>
            <tr>
                <td>JavaScript support?</td>
                <td>
                    <%=MyBrow.javascript%>
                </td>
            </tr>
        </table>
</body>

</html>